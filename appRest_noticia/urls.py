from django.urls import path
from appRest_noticia.views import lista_noticias, detalle_noticia

urlpatterns = [
    path('ListaNoticias/', lista_noticias, name='ListaNoticias'),
    path('DetalleNoticia/<id>/', detalle_noticia, name='DetalleNoticia'),
]

