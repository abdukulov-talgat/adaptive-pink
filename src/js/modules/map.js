import { Loader } from '@googlemaps/js-api-loader';

export default function map() {
    const loader = new Loader({
        apiKey: 'AIzaSyAr8e67FUhW-VqeiyYQc47kmDxv0355QBo',
        version: 'weekly',
    });

    const location = { lat: 59.938788257570735, lng: 30.323044719309095 };
    const icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDBDMjEuNTYwMSAwIDI1LjA0MDIgMS4wNTU2OCAyOC4wMDAzIDMuMDMzNTVDMzAuOTYwNCA1LjAxMTQxIDMzLjI2NzUgNy44MjI2MyAzNC42Mjk4IDExLjExMTdDMzUuOTkyMiAxNC40MDA4IDM2LjM0ODcgMTguMDIgMzUuNjU0MSAyMS41MTE2QzM0Ljk1OTYgMjUuMDAzMyAzMy4yNDUzIDI4LjIxMDYgMzAuNzI3OSAzMC43Mjc5QzI4LjIxMDYgMzMuMjQ1MyAyNS4wMDMzIDM0Ljk1OTYgMjEuNTExNiAzNS42NTQxQzE4LjAyIDM2LjM0ODcgMTQuNDAwOCAzNS45OTIyIDExLjExMTcgMzQuNjI5OEM3LjgyMjYzIDMzLjI2NzUgNS4wMTE0MSAzMC45NjA0IDMuMDMzNTUgMjguMDAwM0MxLjA1NTY4IDI1LjA0MDIgMCAyMS41NjAxIDAgMThDMCAxMy4yMjYxIDEuODk2NDIgOC42NDc3MyA1LjI3MjA4IDUuMjcyMDhDOC42NDc3MyAxLjg5NjQyIDEzLjIyNjEgMCAxOCAwVjBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTguMDEwMiAxMEMxOS41OTE1IDEwLjAwMiAyMS4xMzY5IDEwLjQ3MjcgMjIuNDUwOSAxMS4zNTI1QzIzLjc2NDkgMTIuMjMyMyAyNC43ODg3IDEzLjQ4MTggMjUuMzkzIDE0Ljk0MzJDMjUuOTk3MiAxNi40MDQ2IDI2LjE1NDggMTguMDEyMyAyNS44NDU4IDE5LjU2MzJDMjUuNTM2OCAyMS4xMTQxIDI0Ljc3NTEgMjIuNTM4NiAyMy42NTY4IDIzLjY1NjhDMjIuNTM4NiAyNC43NzUxIDIxLjExNDEgMjUuNTM2OCAxOS41NjMyIDI1Ljg0NThDMTguMDEyMyAyNi4xNTQ4IDE2LjQwNDYgMjUuOTk3MiAxNC45NDMyIDI1LjM5M0MxMy40ODE4IDI0Ljc4ODcgMTIuMjMyMyAyMy43NjQ5IDExLjM1MjUgMjIuNDUwOUMxMC40NzI3IDIxLjEzNjkgMTAuMDAyIDE5LjU5MTUgMTAgMTguMDEwMkMxMCAxNS44ODU3IDEwLjg0MzkgMTMuODQ4MyAxMi4zNDYxIDEyLjM0NjFDMTMuODQ4MyAxMC44NDM5IDE1Ljg4NTcgMTAgMTguMDEwMiAxMFoiIGZpbGw9IiNEMjI4NTYiLz4KPC9zdmc+Cg==';

    loader.load().then(() => {
        map = new google.maps.Map(document.querySelector('.contacts__map'), {
            center: location,
            zoom: 16,
            disableDefaultUI: true,
            // mapTypeControl: false,
        });
        const marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: icon
        });
    });
}

//59.938788257570735, 30.323044719309095
