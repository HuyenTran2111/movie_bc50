import Development from "./dev.js";
import Production from "./prod.js";

const getEnv = (_env) => {
if(!_env){
    return _env;
}
return "production";
};

const env = process.env.NODE_ENV;

const config = {
    development: {...Development},
    production: {...Production},
};
export default config[getEnv(env)];