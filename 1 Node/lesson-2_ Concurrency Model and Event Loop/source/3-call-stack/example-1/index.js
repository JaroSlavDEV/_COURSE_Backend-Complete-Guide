const func = (param, cb) => {
    cb(param);
};

const log = param => {
    console.log(`Function arguments ${param}`);
};

func(1, log);
func(2, log);
func(3, log);
