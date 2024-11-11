import {despesas} from './mock.js';

document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('tabela-despesas');

    despesas.forEach(despesa => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="text-primary">${despesa.nome}</td>
            <td>${despesa.data}</td>
            <td>${despesa.contaBancaria}</td>
            <td class="text-danger">${despesa.valor}</td>
            <td class="text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"><button class="btn-3pontos
btn-3pontos
btn-3pontos"><i class="bi bi-three-dots"></i></button></td>
        `;

        tbody.appendChild(row);
    });
});





