from django import forms

from django.forms import ModelForm
from appCore.models import Slider, Noticia, Jugador, ImagenJugador


class SliderForm(ModelForm):
    class Meta:
        model = Slider
        fields = ['idImagen','imagen', 'titulo', 'subtitulo']

class JugadorForm(ModelForm):
    class Meta:
        model = Jugador
        fields = ['idJugador', 'pnombre', 'snombre', 'apaterno', 'amaterno', 'nacimiento', 
                  'fechaNacimiento', 'estilo', 'preInf', 'inf', 'juvenil', 'tc', 'categoria', 'imagenPortada', 'genero']

class ImagenJugadorForm(ModelForm):
    class Meta:
        model = ImagenJugador
        fields = ['idImagenJug', 'imagenJug', 'title', 'alt', 'fkJugador']

