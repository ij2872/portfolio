import './styles/main.scss';

$(document).ready(function(){
    $('.resume-btn').on('click', function(e){
        e.preventDefault(); 
        window.location.href = 'test.pdf';
    })
});