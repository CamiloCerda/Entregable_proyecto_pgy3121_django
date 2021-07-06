from appRest_dirigentes.viewslogin import loginApi
from django.urls import path
from appRest_dirigentes.views import detalle_dirigente, lista_dirigentes

urlpatterns = [
    path('lista_dirigentes/', lista_dirigentes, name='lista_dirigentes'),
    path('detalle_dirigente/<id>/', detalle_dirigente, name='detalle_dirigente'),
    path('loginApi/', loginApi, name='loginApi'),
]
