const ranges = {
  translate: document.getElementById('tx'),
  scale: document.getElementById('scale'),
  deg: document.getElementById('deg')
};

function valueChange(id, value) {
    document.documentElement.style.setProperty('--' + id, value);
}

window.onload = (e) => {
    ranges.translate.addEventListener('input', function(e) { 
    valueChange(e.currentTarget.id, e.currentTarget.value + 'vw');
    });

    ranges.scale.addEventListener('input', function(e) { 
    valueChange(e.currentTarget.id, e.currentTarget.value);
    });

    ranges.deg.addEventListener('input', function(e) { 
    valueChange(e.currentTarget.id, e.currentTarget.value + 'deg');
    });
}