From python:3.12.2-slim-bullseye

WORKDIR /usr/src/venueGuide_backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y netcat

RUN pip install --upgrade pip

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY ./entrypoint.sh /usr/src/venueGuide_backend/entrypoint.sh
RUN sed -i 's/\r//g' /usr/src/venueGuide_backend/entrypoint.sh
RUN chmod +x /usr/src/venueGuide_backend/entrypoint.sh


COPY . .


ENTRYPOINT [ "/usr/src/venueGuide_backend/entrypoint.sh" ]