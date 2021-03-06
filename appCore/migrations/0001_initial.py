# Generated by Django 3.1.5 on 2021-06-09 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Noticia',
            fields=[
                ('idNoticia', models.AutoField(primary_key=True, serialize=False)),
                ('titulo', models.CharField(max_length=30)),
                ('subtitulo', models.CharField(max_length=100)),
                ('cuerpoNoticia', models.TextField()),
                ('imagen', models.ImageField(upload_to='home')),
            ],
            options={
                'verbose_name': 'noticia',
                'verbose_name_plural': 'noticias',
            },
        ),
        migrations.CreateModel(
            name='Slider',
            fields=[
                ('idImagen', models.AutoField(primary_key=True, serialize=False)),
                ('imagen', models.ImageField(upload_to='home')),
                ('titulo', models.CharField(max_length=80)),
                ('subtitulo', models.CharField(max_length=200)),
            ],
            options={
                'verbose_name': 'slider',
                'verbose_name_plural': 'sliders',
            },
        ),
    ]
