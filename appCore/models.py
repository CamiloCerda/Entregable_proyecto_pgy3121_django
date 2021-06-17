from django.db import models
from django.db.models.fields.files import ImageField

# Create your models here.

class Slider(models.Model):
    idImagen = models.AutoField(primary_key=True)
    imagen = models.ImageField(upload_to = 'home')
    titulo = models.CharField(max_length=80)
    subtitulo = models.CharField(max_length=200)

    class Meta:
        verbose_name = 'slider'
        verbose_name_plural = 'sliders'

    def __str__(self):
        return self.titulo



class Noticia(models.Model):
    idNoticia = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=200)
    subtitulo = models.CharField(max_length=200)
    cuerpoNoticia = models.TextField()
    imagen = models.ImageField(upload_to = 'home')
    tipoNoticia = models.CharField(blank=True, null=True, max_length=80)
    creado = models.DateTimeField(auto_now_add=True)
    actualizado = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'noticia'
        verbose_name_plural = 'noticias'

    def __str__(self):
        return self.titulo



class Jugador(models.Model):
    idJugador = models.AutoField(primary_key=True)
    pnombre= models.CharField(max_length=50, verbose_name='Primer nombre')
    snombre= models.CharField(blank=True, null=True, max_length=50, verbose_name='Segundo nombre')
    apaterno= models.CharField(max_length=50, verbose_name='Apellido paterno')
    amaterno= models.CharField(blank=True, null=True, max_length=50, verbose_name='Apellido materno')
    nacimiento= models.CharField(max_length=50, verbose_name='Lugar de nacimiento')
    fechaNacimiento = models.DateField(blank=True, null=True, verbose_name='Fecha de nacimiento')
    estilo = models.CharField(max_length=50, verbose_name='Estilo de juego')
    preInf = models.CharField(max_length=50, verbose_name='Preinfantil')
    inf = models.CharField(max_length=50, verbose_name='Infantil')
    juvenil = models.CharField(max_length=50, verbose_name='Juvenil')
    tc = models.CharField(max_length=50, verbose_name='Todo competidor')
    categoria = models.CharField(max_length=80, verbose_name='Categoria actual', blank=True, null=True)
    imagenPortada = models.ImageField(upload_to = 'home')
    genero = models.CharField(max_length=10, verbose_name='Genero')

    class Meta:
        verbose_name = 'jugador'
        verbose_name_plural = 'jugadores'

    def __str__(self):
        return f'{self.pnombre} {self.apaterno}'

class ImagenJugador(models.Model):
    idImagenJug = models.AutoField(primary_key=True)
    imagenJug = models.ImageField(upload_to = 'home')
    title = models.CharField(max_length=200, verbose_name='title', blank=True, null=True)
    alt = models.CharField(max_length=200, verbose_name='alt', blank=True, null=True)
    fkJugador = models.ForeignKey(Jugador, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'imagenJugador'
        verbose_name_plural = 'imagenesJugador'
    
    def __str__(self):
        return f'{self.title}'