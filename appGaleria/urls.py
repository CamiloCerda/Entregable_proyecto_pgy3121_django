from django.urls import path

from .views import centroEntrenamiento

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('centroEntrenamiento/', centroEntrenamiento, name='centroEntrenamiento'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)