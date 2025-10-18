"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// middleware
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
// test route
exports.app.get("/", (req, res) => {
    res.send("Hello World! 🚀");
});
// start server
exports.app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map