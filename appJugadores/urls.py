from django.urls import path
from .views import nuestrosJugadores

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('nuestrosJugadores/', nuestrosJugadores, name='nuestrosJugadores'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)