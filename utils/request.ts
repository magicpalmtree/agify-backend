import { Request, Response, NextFunction } from 'express';

type AsyncFunc<T> = (arg: any) => Promise<T>;

const request = async <T>(func: AsyncFunc<T>, req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await func(req.body);
        res.send(data);
    } catch (err) {
        console.log(func);
        console.error(err);
        next(err);
    }
};

export default request;