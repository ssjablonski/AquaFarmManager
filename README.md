# AquaFarmManager

## Opis Projektu

AquaFarmMenager to aplikacja do zarządzania modułami IOT farmy akwaponicznej które wykonują pomiary temperatury wody. Aplikcja umożliwia użytkownikom przeglądanie modułów w formie kafli lub listy, wyszukiwanie modułów po nazwie oraz wyświetlanie historii temperatury modułów w formie wykresów.

## Funkcje

- Wyświetlanie modułów w widoku kafli oraz listy.
- Filtrowanie modułów za pomocą wyszukiwarki.
- Wyświetlanie historii w wybranych przedziałach czasowych temperatury modułów na wykresie liniowym (w formie godzinowej oraz dziennej).
- Edytowanie danych modułu.
- Tryb ciemny i jasny.
- W pełni responsywny interfejs użytkownika.

## Technologie

- **React** - Biblioteka do budowania interfejsów użytkownika.
- **Tailwind CSS** - Narzędzie do szybkiego stylowania komponentów.
- **Recharts** - Biblioteka do tworzenia wykresów.
- **axios** - Biblioteka do wykonywania zapytań HTTP.
- **date-fns** - Biblioteka do manipulacji datami.
- **Socket.IO** - Biblioteka do obsługi komunikacji w czasie rzeczywistym.
- **Formik** -Biblioteka do obsługi formularzy.
- **Yup** - Biblioteka do walidacji formularzy.
- **Prettier** - Narzędzie do formatowania kodu.

## Instalacja

1. Sklonuj repozytorium:

```bash
git clone https://github.com/ssjablonski/JobBoard.git
cd JobBoard
```

2. Znajdując się w głównym katalogu projektu wykonaj:

```bash
docker compose up
```

3. Gotowe! Projekt znajdziesz pod `localhost:3000`
