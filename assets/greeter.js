import moment from 'moment';

let  greet = (name) => {
    const day = moment().format('dddd');
    console.log(`Have a nice ${day}, ${name}`);
};

export default greet;