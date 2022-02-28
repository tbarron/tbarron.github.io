var js_update = "Updated: <2022.0228 14:59:01>"

addLoadHandler(startup)

/* ------------------------------------------------------------------
 * The CV class represents the life system
 */
class CV {

    /* ------------------------------------------------------------------
     * Set up the object
     */
    constructor(row, col) {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 10;
        this.width = 300;
        this.height = 150;
        this.then = 0;
        this.running = false;
        this.sc = new StepCount();
        this.mtx_a = this.new_matrix();
        this.mtx_b = this.new_matrix();
        this.next = "b";
        this.cfgs = ["clear", "acorn", "diehard", "glider", "gun", "puff",
                     "random", "r-pentomino", "ship"];
    }

    /* ------------------------------------------------------------------
     * Create and return a 2d array of dimension this.width x this.height
     */
    new_matrix() {
        var mtx = new Array(this.height);
        for (var j = 0 ; j < this.height ; j++) {
            mtx[j] = new Array(this.width);
            for (var i = 0 ; i < this.width ; i++) {
                mtx[j][i] = 0;
            }
        }
        return mtx;
    }

    /* ------------------------------------------------------------------
     * Set up known starting configurations
     */
    configure() {
        var el = document.getElementById("starts");
        var which = this.cfgs[el.selectedIndex];
        console.log("configure: which = ", which);
        var mtx = this.output_matrix();
        switch (which) {
        case "clear":
            console.log("configure: clear the canvas");
            for (var y = 0 ; y < this.height ; y++) {
                for (var x = 0 ; x < this.width ; x++) {
                    mtx[y][x] = 0;
                }
            }
            break;

        case "glider":
            mtx[10][10] = 1;
            mtx[10][11] = 1;
            mtx[10][12] = 1;
            mtx[9][12] = 1;
            mtx[8][11] = 1;
            console.log("configure: bit count = ", this.bitCount(mtx));
            break;

        case "acorn":
            console.log("configure: set up acorn");
            break;

        default:
            console.log("configure: something else")
        }

        this.draw();
    }

    /* -----------------------------------------------------------------
     * Count the non-zero elements in matrix *mtx*
     */
    bitCount(mtx) {
        var count = 0;
        for (var y = 0 ; y < this.height ; y++) {
            for (var x = 0 ; x < this.width ; x++) {
                if (0 < mtx[y][x]) {
                    count += 1;
                }
            }
        }
        // console.log("bitCount: count = ", count);
        return count;
    }

    /* ------------------------------------------------------------------
     * Iterate the system one time. If this.running is true, request
     * the next animation frame
     */
    iterate(when) {
        console.log("iterate");
        let lapse = Math.min((when - this.then)/1000, 0.02);
        this.then = when;
        console.log("iterate: update");
        this.update(when);
        console.log("iterate: clear");
        this.clear();
        console.log("iterate: draw");
        this.draw();
        this.swap_matrix();
        if (this.running) {
            window.requestAnimationFrame(thingIterator);
        }
    }

    /* ------------------------------------------------------------------
     * Clear the canvas
     */
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    /* ------------------------------------------------------------------
     * Swap the matrices
     */
    swap_matrix() {
        this.next = ("b" == this.next) ? "a" : "b";
    }

    /* ------------------------------------------------------------------
     * Compute the next frame
     */
    update(when) {
        console.log("input mtx bit count: ",
                    this.bitCount(this.input_matrix()));
        console.log("output mtx bit count: ",
                    this.bitCount(this.output_matrix()));
        this.compute_next_mtx(this.output_matrix(), this.input_matrix());
        this.sc.update();
    }

    /* ------------------------------------------------------------------
     * Calculate the next matrix (*nx*) from the previous one (*pr*)
     */
    compute_next_mtx(nx, pr) {
        // compute nx from pr
        let neighbors;
        for (var y = 0 ; y < this.height ; y++) {
            for (var x = 0 ; x < this.width ; x++) {
                neighbors = this.neighborCount(pr, x, y);
                if (3 == neighbors) {
                    nx[y][x] = 1;
                } else if (2 != neighbors) {
                    nx[y][x] = 0;
                } else {
                    nx[y][x]
                }
            }
        }
    }

    /* ------------------------------------------------------------------
     * How many live neighbors does (x, y) have?
     */
    neighborCount(mtx, x, y) {
        var count = 0;
        for (var i = -1 ; i <= 1 ; i++) {
            for (var j = -1 ; j <= 1 ; j++) {
                if ((0 < (x+i)) && ((x+i) < this.width)
                    && (0 < (y+j)) && ((y+j) < this.height)) {
                    if (0 != mtx[y+j][x+i]) {
                        count += 1;
                    }
                }
            }
        }
        if (0 < count) {
            console.log("neighborCount(", x, y, ") = ", count);
        }
        return count;
    }

    /* ------------------------------------------------------------------
     * Return a ref to the array we're sourcing from
     */
    input_matrix() {
        var rv;
        var msg;
        if ("b" == this.next) {
            rv = this.mtx_a;
            console.log("input_matrix: returning a");
        } else {
            rv = this.mtx_b;
            console.log("input_matrix: returning b");
        }
        return rv;
    }

    /* ------------------------------------------------------------------
     * Return a ref to the array we're writing to
     */
    output_matrix() {
        var rv;
        if ("b" == this.next) {
            rv = this.mtx_b;
            console.log("output_matrix: returning b");
        } else {
            rv = this.mtx_a;
            console.log("output_matrix: returning a");
        }
        return rv;
    }

    /* ------------------------------------------------------------------
     * Draw the canvas
     */
    draw() {
        var mtx = this.output_matrix();
        // console.log("draw: mtx = ", mtx);
        for (var y = 0 ; y < this.height ; y++) {
            for (var x = 0 ; x < this.width ; x++) {
                if (0 != mtx[y][x]) {
                    this.ctx.fillRect(x, y, 1, 1);
                }
            }
        }
        // this.ctx.fillRect(this.x, this.y, 1, 1);
        this.sc.draw();
    }

    /* ------------------------------------------------------------------
     * Toggle between running and not running
     */
    gostop() {
        console.log("this.gostop: ...")
        setElementValue("stopgo", this.running ? ">" : "[]");
        this.running = !this.running;
        if (this.running) {
            setElementValue("stopgo", "Pause");
            window.requestAnimationFrame(thingIterator);
        } else {
            setElementValue("stopgo", "Run");
        }
    }
}

/* ------------------------------------------------------------------
 * The StepCount object manages the "Steps:" button label as well as
 * the display of the number of steps we have processed so far.
 */
class StepCount {
    /* ------------------------------------------------------------------
     * Set up the step count object
     */
    constructor() {
        this.label = document.getElementById("sclabel");
        this.field = document.getElementById("stepcount");
        this.steps = 0;
    }

    /* ------------------------------------------------------------------
     * Update the visible value. This is called for each system
     * refresh cycle.
     */
    draw() {
        this.field.value = this.steps;
        this.field.innerHTML = this.steps;
    }

    /* ------------------------------------------------------------------
     * Increment the number of steps. This is called for each
     * iteration of the system.
     */
    update() {
        this.steps += 1;
    }

    /* ------------------------------------------------------------------
     * Reset to zero. This is triggered when the "Steps: (Reset)"
     * button is clicked.
     */
    reset() {
        this.steps = 0;
    }

    /* ------------------------------------------------------------------
     * When the mouse is over the "Steps:" button, change the text to
     * "Reset" to cue the user that clicking the button will reset the
     * step count
     */
    mouseover() {
        this.label.value = "Reset";
        this.label.innerHTML = "Reset";
    }

    /* ------------------------------------------------------------------
     * When the mouse moves off the "Reset" button, change the text
     * back to "Steps:" to reflect the meaning of the number to the
     * right
     */
    mouseout() {
        this.label.value = "Steps:";
        this.label.innerHTML = "Steps:";
    }

    /* ------------------------------------------------------------------
     * User just clicked the "Reset" button, so here we reset the step
     * count and redisplay it
     */
    click() {
        this.reset();
        this.draw();
    }
}

var thing;
/* ----------------------------------------------------------------------
 * This hook gets us started
 */
function startup() {
    thing = new CV();
    // window.requestAnimationFrame(thingIterator)
}

/* ----------------------------------------------------------------------
 * This gives us a handle to pass requestAnimationFrame() -- it
 * doesn't like being called with object methods
 */
function thingIterator(when) {
    thing.iterate(when);
}
