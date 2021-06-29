from rest_framework import serializers
from appCore.models import Dirigente


class DirigenteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dirigente
        fields = '__all__'
        
