const level = {
    ferro: [0, 1000],
    bronze: [1001, 2000],
    prata: [2001, 5000],
    ouro: [5001, 7000],
    platina: [7001, 8000],
    ascendente: [8001, 9000],
    imortal: [9001, 10000],
    radiante: 10001
};

const heroi = {
    name: null,
    xp: null,
    level: null
};

document.querySelector('.box-form').addEventListener('submit', (event) => {
    event.preventDefault();
    heroi.name = document.getElementById('heroname').value;
    heroi.xp = parseInt(document.getElementById('heroxp').value, 10);
    heroi.level = getLevel(heroi.xp);
    showlevelHero();
});

const getLevel = (score) => {
    if (score >= level.radiante)
        return 'radiante';
    for (const [key, value] of Object.entries(level))
        if (Array.isArray(value))
            if (score >= value[0] && score <= value[1])
                return key;
}

function showlevelHero() {
    const btnRestart = document.querySelector('.restart-btn');
    const result = document.querySelector('#box-result');
    const level = document.querySelector('#level-hero');
    result.classList.remove('hidden');

    level.innerHTML = `<p>O herói de nome <span class="show">${heroi.name}</span> está no nível 
            <span class="show">${heroi.level}</span> com <span class="show">${heroi.xp}</span> pontos de XP.</p>`;

    btnRestart.addEventListener('click', () => {
        document.getElementById('heroname').value = '';
        document.getElementById('heroxp').value = '';
        result.classList.add('hidden');
    });
}