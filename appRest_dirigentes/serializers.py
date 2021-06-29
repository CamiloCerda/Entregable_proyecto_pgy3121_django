from rest_framework import serializers
from appCore.models import Dirigente


class DirigenteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dirigente
        fields = '__all__'
        #fields = ['idNoticia', 'titulo', 'subtitulo', 'cuerpoNoticia'
        #        , 'imagen', 'tipoNoticia', 'creado', 'actualizado']
