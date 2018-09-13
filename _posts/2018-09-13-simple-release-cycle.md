---
title: Simple Release Cycle
---

This release cycle assumes that the project being updated follows the
conventions of [Semantic Versioning](https://semver.org/) and
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/).


  * Checkout the current master branch to a child work branch with a
    meaningful name.
    
        git checkout -b <new-branch>
        
  * Make changes to the work branch until it is ready to become the next
    release.

  * Once all changes are complete,
      * Update CHANGELOG.md and the project version to reflect the updates.
      * Make an annotated version tag on the last commit in the work
        branch. Put the text of the CHANGELOG.md entry in the description
        of the new tag.

            git tag -a <version>

      * Verify that all the tests pass.
      
            py.test
            
  * Checkout master and merge the work branch.

        git checkout master
        git merge <branch>

  * Verify that all tests pass.

        py.test
        
  * Push master to the origin.

        git push

The following tests can be used to verify that the work branch is ready to
be merged to master (test_mergeable()) and that the master branch is ready
to be released (test_releasable()), i.e., pushed back to github with an
annotated tag to trigger a release.
