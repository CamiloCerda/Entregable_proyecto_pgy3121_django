from django.urls import path

from .views import paginaPersonal

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('paginaPersonal/<pk>/', paginaPersonal, name='paginaPersonal'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)