const TodoList = require("./TodoList")

// @ponicode
describe("addTodo", () => {
    let inst

    beforeEach(() => {
        inst = new TodoList.default("reply_click()")
    })

    test("0", async () => {
        await inst.addTodo("Elio")
    })

    test("1", async () => {
        await inst.addTodo("Dillenberg")
    })

    test("2", async () => {
        await inst.addTodo("elio@example.com")
    })

    test("3", async () => {
        await inst.addTodo(undefined)
    })
})

// @ponicode
describe("toggleTodo", () => {
    let inst

    beforeEach(() => {
        inst = new TodoList.default("reply_click()")
    })

    test("0", async () => {
        await inst.toggleTodo("./path/to/file")
    })

    test("1", async () => {
        await inst.toggleTodo("/path/to/file")
    })

    test("2", async () => {
        await inst.toggleTodo("C:\\\\path\\to\\file.ext")
    })

    test("3", async () => {
        await inst.toggleTodo("path/to/folder/")
    })

    test("4", async () => {
        await inst.toggleTodo(".")
    })

    test("5", async () => {
        await inst.toggleTodo(undefined)
    })
})
