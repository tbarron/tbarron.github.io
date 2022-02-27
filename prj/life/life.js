var js_update = "Updated: <2022.0226 15:50:54>"

addLoadHandler(startup)

class CV {
    constructor(row, col) {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 10;
        this.width = 300;
        this.height = 150;
        this.then = 0;
        this.running = true;
        this.sc = new StepCount();
        this.mtx_a = this.new_matrix();
        this.mtx_b = this.new_matrix();
        this.next = "b";
    }

    new_matrix() {
        var mtx = new Array(this.height);
        for (var j = 0 ; j < this.height ; j++) {
            this.matrix[j] = new Array(this.width);
            for (var i = 0 ; i < this.width ; i++) {
                this.matrix[j][i] = 0;
            }
        }
    }

    configure() {
    }

    iterate(when) {
        let lapse = Math.min((when - this.then)/1000, 0.02);
        this.then = when;
        this.update(when);
        this.clear();
        this.draw();
        if (this.running) {
            window.requestAnimationFrame(thingIterator);
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    update(when) {
        if (this.next == "a") {
            this.compute_next_mtx(this.mtx_a, this.mtx_b);
        } else if (this.next == "b") {
            this.compute_next_mtx(this.mtx_b, this.mtx_a);
        } else {
            this.next = "a";
        }

    }

    compute_next_mtx(nx, pr) {
        // compute nx from pr
        let neighbors;
        for (var y = 0 ; y < this.height ; y++) {
            for (var x = 0 ; x < this.width ; x++) {
                neighbors = neighborCount(x, y);
                if (3 == neighbors) {
                    this.matrix[x][y] = 1;
                } else if (2 != neighbors) {
                    this.matrix[x][y] = 0;
                }
                if (0 != this.matrix[x][y]) {
                    this.ctx.fillRect(x, y, 1, 1);
                }
            }
        }
    }

    draw() {
        for (var y = 0 ; y < this.height ; y++) {
            for (var x = 0 ; x < this.width ; x++) {
                if (0 != this.matrix[x][y]) {
                    this.ctx.fillRect(x, y, 1, 1);
                }
            }
        }
        // this.ctx.fillRect(this.x, this.y, 1, 1);
        this.sc.update();
    }

    gostop() {
        setElementValue("stopgo", this.running ? ">" : "[]");
        this.running = !this.running;
        if (this.running) {
            window.requestAnimationFrame(thingIterator);
        }
    }
}

class StepCount {
    constructor() {
        this.label = document.getElementById("sclabel");
        this.field = document.getElementById("stepcount");
        this.steps = 0;
    }

    update() {
        this.field.value = this.steps;
        this.field.innerHTML = this.steps;
        this.steps += 1;
    }

    reset() {
        this.steps = 0;
    }

    mouseover() {
        this.label.value = "Reset";
        this.label.innerHTML = "Reset";
    }
    
    mouseout() {
        this.label.value = "Steps:";
        this.label.innerHTML = "Steps:";
    }

    click() {
        this.reset();
        this.update();
    }
}

var thing;
function startup() {
    thing = new CV();
    window.requestAnimationFrame(thingIterator)
}

function thingIterator(when) {
    thing.iterate(when);
}
