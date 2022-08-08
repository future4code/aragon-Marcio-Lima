export class DateFormat {
    private currentDate = new Date()
    private day = String(this.currentDate.getDate()).padStart(2, "0")
    private month = String(this.currentDate.getMonth() + 1).padStart(2, "0")
    private year = this.currentDate.getFullYear()
    public date = `${this.year}/${this.month}/${this.day}`
}
