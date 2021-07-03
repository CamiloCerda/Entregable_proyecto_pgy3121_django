from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from appCore.models import Dirigente
from .serializers import DirigenteSerializer

# para realizar la autenticacion
from rest_framework.decorators import permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

#@csrf_exempt

@api_view(['GET','POST'])
@permission_classes((IsAuthenticated,))
def lista_dirigentes(request):
    """ 
    Lista de todas las dirigentes
    """
    if request.method == 'GET':
        dirigente = Dirigente.objects.all()
        serializer = DirigenteSerializer(dirigente, many=True)

        return Response(serializer.data)
    
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = DirigenteSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET','PUT', 'DELETE'])
@permission_classes((IsAuthenticated,))
def detalle_dirigente(request, id):
    """ 
    Get, update, delete de un dirigente en particular
    """
    try:
        dirigente = Dirigente.objects.get(id_dirigente = id)
    except Dirigente.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = DirigenteSerializer(dirigente)
        return Response(serializer.data)
    
    if request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = DirigenteSerializer(dirigente, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        dirigente.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)