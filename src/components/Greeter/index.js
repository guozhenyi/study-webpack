
export default () => {
    let greet = document.createElement('div');
    greet.className = 'demo-01';
    greet.id = 'demo_01';
    greet.innerHTML = '<h1>hello Webpack!</h1><hr />';
    return greet;
}
