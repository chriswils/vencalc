function calculate(element) {
    let coins = document.getElementById("coins").value;
    let mult_factor =  0.00042;
    let mult_factor_projected = 0;

    if (coins >= 10000 && coins < 49999) {
        mult_factor_projected = 38.7 / 100;
    }
    if (coins >= 50000 && coins < 149999) {
        mult_factor_projected = 57 / 100;
    }
    if (coins >= 150000 && coins < 249999) {
        mult_factor_projected = 75.2 / 100;
    }
    if (coins >= 250000) {
        mult_factor_projected = 75.2 / 100;
    }
    let daily_thor = coins * mult_factor;
    let daily_thor_gen = daily_thor + (daily_thor * mult_factor_projected);

    daily_min.innerHTML = parseFloat(daily_thor.toFixed(5));
    weekly_min.innerHTML = parseFloat((daily_thor * 7).toFixed(5));
    monthly_min.innerHTML = parseFloat((daily_thor * 30).toFixed(5));
    yearly_min.innerHTML = parseFloat((daily_thor * 365).toFixed(5));
    daily_proj.innerHTML = parseFloat(daily_thor_gen.toFixed(5));
    weekly_proj.innerHTML = parseFloat((daily_thor_gen * 7).toFixed(5));
    monthly_proj.innerHTML = parseFloat((daily_thor_gen * 30).toFixed(5));
    yearly_proj.innerHTML = parseFloat((daily_thor_gen * 365).toFixed(5));

}
