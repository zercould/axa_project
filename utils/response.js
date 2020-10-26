export default class Res {
    static ReE (res, err) {// Error Web Response
        if(typeof err == 'object' && typeof err.message != 'undefined'){
            err = err.message;
        }
        res.statusCode = 500;
        return res.json({success:false, error: err});
    }

    static ReS (res, data)  { // Success Web Response
    let send_data = { success: true };

    if(typeof data == 'object'){
        send_data = Object.assign(data, send_data);
    }
    res.statusCode = 200;
    return res.json(send_data)
    }
}
