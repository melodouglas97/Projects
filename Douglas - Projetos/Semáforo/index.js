function pare() {
    document.querySelector('#red').classList.remove('opacities');
    document.querySelector('#yellow').classList.add('opacities');
    document.querySelector('#green').classList.add('opacities');
}


function atencao() {
    document.querySelector('#red').classList.add('opacities');
    document.querySelector('#yellow').classList.remove('opacities');
    document.querySelector('#green').classList.add('opacities');
}


function siga() {
    document.querySelector('#red').classList.add('opacities');
    document.querySelector('#yellow').classList.add('opacities');
    document.querySelector('#green').classList.remove('opacities');
}