const errorHandler = (error, req, res, next) => {
    if(error.status)
        return res.status(error.status).json({ message: error.message });
    
    console.error(error);
    return res.sendStatus(500);
}

export default errorHandler;