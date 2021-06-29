from django.contrib import admin
from .models import ImagenJugador, Jugador, Noticia, Slider, Dirigente

# Register your models here.


admin.site.register(Noticia)
admin.site.register(Slider)
admin.site.register(Jugador)
admin.site.register(ImagenJugador)
admin.site.register(Dirigente)