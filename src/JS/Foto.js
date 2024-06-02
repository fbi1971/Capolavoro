const Foto = Array.from(document.getElementsByClassName("Foto"));

Foto.forEach(_foto => {
    _foto.addEventListener('mouseover', function onMouseOver(event) {
        _foto.classList.add("FotoSelezionata");
    });
    _foto.addEventListener('mouseout', function onMouseOut(event) {
        _foto.classList.remove("FotoSelezionata");
    });
});
