FROM phpmyadmin:latest

# Update and Install dependencies | Mise à jour et installation des dependances
RUN apt-get update && apt-get install -y unzip lsd

# Create "themes" directory | Creation du dossier "themes"
RUN mkdir -p /var/www/html/themes

# Add of the `BooDark` theme | Ajout du theme `BooDark`
RUN curl -L https://files.phpmyadmin.net/themes/boodark/1.1.0/boodark-1.1.0.zip > /tmp/boodark-1.1.0.zip && \
  unzip /tmp/boodark-1.1.0.zip -d /tmp/boodark-1.1.0/ && rm /tmp/boodark-1.1.0.zip && \
  mv /tmp/boodark-1.1.0/boodark /var/www/html/themes/

# Create useful aliases | Creation d'alias utiles
RUN echo "alias cls='clear'" >> ~/.bashrc \
  echo "alias ls='lsd -al --group-dirs first'" >> ~/.bashrc

# Set working directory | Definition du repertoire de travail
WORKDIR /var/www/html
