package bankapp;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Transaction {
    TransactionType type;
    int amount;
    LocalDateTime timestamp;

    // 생성자
    public Transaction(TransactionType type, int amount) {
        this.type = type;
        this.amount = amount;
        this.timestamp = LocalDateTime.now();
    }

    // 날짜 형식 변환 메서드
    public String getFormattedTimestamp() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-mm-dd HH:mm:ss");
        return timestamp.format(formatter);
    }
}
