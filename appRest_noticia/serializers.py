from rest_framework import serializers
from appCore.models import Noticia


class NoticiaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Noticia
        #fields = '__all__'
        fields = ['idNoticia', 'titulo', 'subtitulo', 'cuerpoNoticia'
                , 'imagen', 'tipoNoticia', 'creado', 'actualizado']

