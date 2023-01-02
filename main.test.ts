import { describe, expect, it } from "bun:test";
import app from "./src/index"

describe('my first test', () => {
    it('should return 200 response',async () => {
        const req = new Request("http://localhost/")
        const res = await app.fetch(req)
        expect(res.status).toBe(200)
    })
})