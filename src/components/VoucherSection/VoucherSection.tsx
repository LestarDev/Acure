import "./VoucherSection.css"

const VoucherSection = () => {

    return <section className="voucherSection" id="voucher">
        <div>
            <span className="primary">ACURE.PL</span>
            <p>
                Zrealizuj
                &nbsp;
                <span>Voucher</span>
            </p>
            <form>
                <input type="text" placeholder="Wpisz tutaj swój Nick" />
                <input type="text" placeholder="Wpisz tutaj swój KOD vouchera" />
                <input type="submit" value="ZREALIZUJ VOUCHER" className="primary" />
            </form>
        </div>
        <div className="ipData">
            <span>Adres ip</span>
            <span className="primary">ACURE.PL</span>
            <span>Czekamy na Ciebie w grze!</span>
        </div>
    </section>
}

export default VoucherSection