// express.d.ts
import "express";

interface RequestUser  {
    id: number,
    name: string, 
    email: string
}

declare global {
    namespace Express {
    interface User extends RequestUser {}
    }
}