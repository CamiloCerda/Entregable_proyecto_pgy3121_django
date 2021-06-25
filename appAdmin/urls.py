from django.urls import path

from .views import administrador, administradorAgreg, administradorAgregImg, administradorBorrar, administradorModif, eliminarImgPersonal, modificarImg, modificarImgPersonal, sliderElim, slidersAgreg, slidersModif


from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('administrador/', administrador, name='administrador'),
    path('administradorModif/<pk>/', administradorModif, name='administradorModif'),
    path('administradorAgreg/', administradorAgreg, name='administradorAgreg'),
    path('administradorBorrar/<pk>/', administradorBorrar, name='administradorBorrar'),
    path('administradorAgregImg/<pk>/', administradorAgregImg, name='administradorAgregImg'),
    path('modificarImg/', modificarImg, name='modificarImg'),
    path('modificarImgPersonal/<pk>/',modificarImgPersonal, name='modificarImgPersonal'),
    path('slidersAgreg/', slidersAgreg, name='slidersAgreg'),
    path('slidersModif/', slidersModif, name='slidersModif'),
    path('sliderElim/<pk>/', sliderElim, name='sliderElim'),
    path('eliminarImgPersonal/<pk>/', eliminarImgPersonal, name='eliminarImgPersonal'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)