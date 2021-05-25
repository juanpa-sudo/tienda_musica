$(document).ready(function () {
	$("#artistas").DataTable({
		paging: true,
		lengthChange: false,
		searching: true,
		ordering: true,
		info: true,
		autoWidth: false,
		responsive: true,
		pageLength: 5,
	});
	$(".like-btn").on("click", function () {
		$(this).toggleClass("like-active");
	});

	$(".clap-btn").on("click", function () {
		$(this).toggleClass("clap-active");
	});
});
let eliminar = document.querySelectorAll(".eliminar");

for (let i = 0; i < eliminar.length; i++) {
	eliminar[i].addEventListener("click", (e) => {
		e.preventDefault();

		let direccion = e.target.href;
		let fila = e.target.parentElement.parentElement;
		let nombre = fila.firstElementChild.textContent;

		Swal.fire({
			title: `Estas Seguro que desea Elimnar a ${nombre}? `,
			text: "Esta Accion es Irrevesible",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Si, Eliminar!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire(
					"Eliminado!",
					"Artistas Eliminado.",
					"success"
				);
				setTimeout(() => {
					window.location = direccion;
				}, 1000);
			}
		});
	});
}

axios.get("/admin/cancionesApi")
	.then((result) => {
		let data = result.data.map((e) => {
			return e.likes;
		});
		let labels = result.data.map((e) => {
			return e.nombre;
		});
		let ctx = document.getElementById("myChart");
		let myChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: labels,
				datasets: [
					{
						label: "# of Votes",
						data: data,
						backgroundColor: [
							"rgba(255, 99, 132, 0.2)",
							"rgba(54, 162, 235, 0.2)",
							"rgba(255, 206, 86, 0.2)",
							"rgba(75, 192, 192, 0.2)",
							"rgba(153, 102, 255, 0.2)",
							"rgba(255, 159, 64, 0.2)",
						],
						borderColor: [
							"rgba(255, 99, 132, 1)",
							"rgba(54, 162, 235, 1)",
							"rgba(255, 206, 86, 1)",
							"rgba(75, 192, 192, 1)",
							"rgba(153, 102, 255, 1)",
							"rgba(255, 159, 64, 1)",
						],
						borderWidth: 1,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	})
	.catch((err) => {
		console.log(err);
	});

axios.get("/admin/compraApi")
	.then((result) => {
		let labels = result.data.map((e) => {
			return e.fecha;
		});
		let data = result.data.map((e) => {
			return e.compras;
		});
		let ctx = document.getElementById("myChart2");
		let myChart = new Chart(ctx, {
			type: "line",
			labels: labels,
			data: {
				labels: labels,
				datasets: [
					{
						label: "My First Dataset",
						data: data,
						fill: false,
						borderColor: "rgb(75, 192, 192)",
						tension: 0.1,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	})
	.catch((err) => {});
