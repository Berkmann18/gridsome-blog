# Contribution guide

1.  Make sure you always pull the latest changes from the repo and `rebase` from the `master` branch whenever it's necessary.
2.  Always work on the `dev` branch or dedicated branches (e.g.: for features).
3.  Don't modify generated files in `/dist`.
4.  Squash commits in branches to reduce the chain whenever its possible.
5.  Always **test** your code using `npm test` (_if applicable_).
6.  If you add new code, ensure that it's covered by test cases (_if applicable_).
7.  If you fix an issue, mention `fix #x` (where x is the issue number).
8.  If you reference an issue/PR, mention `re #x`.
9.  Ensure that you use the appropriate code style (that can be checked with `npm run lint`).
10. Make sure you follow the [ESLint commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-eslint).

## Project structure
-   **`blog`**: contains blogposts.
-   **`src`**: contains source files.
-   **`static`**: contains files to be copied over `./dist` during the build process.