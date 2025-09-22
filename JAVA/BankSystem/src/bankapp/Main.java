package bankapp;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    // 전역 공간
    static Scanner scan = new Scanner(System.in);
    static List<BankAccount> accountList = new ArrayList<>();
    
    public static void main(String[] args) {
        // 사용자 입력
        boolean run = true; // 토글(상태) 변수
        // 메뉴 화면
        while (run) {
            System.out.println("=========================");
            System.out.println("1.계좌 생성 | 2. 예금 | 3. 출금 | 4. 계좌 검색 | 5. 종료");
            System.out.println("=========================");
            System.out.println("선택> ");
            
            // 선택한 번호(문자열) -> 정수로 변환
            try {
                int choice = Integer.parseInt(scan.nextLine());
                switch (choice) {
                        case 1:
                            createAccount();
                            break;
                        case 2:
                            deposit();
                            break;
                        case 3:
                            withdraw();
                            break;
                        case 4:
                            selectAccount();
                            break;
                        case 5:
                            System.out.println("프로그램을 종료합니다.");
                            run = false; // 상태 바꿈
                            break;
                        default:
                            System.out.println("지원되지 않는 기능입니다.");
                    }
            } catch (NumberFormatException e) {
                System.out.println("올바른 숫자를 입력해주세요.");
            }
        }
        scan.close();
    }


    // 1. 계좌 생성
    private static void createAccount() { // 외부에서 사용할 일 없으니까 private으로
        while (true) {
            try {
                System.out.print("계좌번호 입력: "); // println말고 print로하면 줄바꿈 하지않고 출력
                String accNum = scan.nextLine(); // 숫자는 parseInt();

                if(searchAccount(accNum) != null) {
                    System.out.println("이미 등록된 계좌번호입니다. 다른 번호를 입력해주세요.");
                } else {
                    System.out.println("계좌 소유주 입력: ");
                    String name = scan.nextLine();

                    // 신규 계좌 생성
                    BankAccount newAccount = new BankAccount(accNum, name); // newAccount 인스턴스 생성
                    // list에 저장
                    accountList.add(newAccount);
                    System.out.println("계좌가 생성되었습니다.(계좌번호: " + accNum + ")");
                    break;
                }
            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());
            }
        }



    }

    // 2. 예금
    private static void deposit() {
        System.out.print("계좌번호 입력: ");
        String accNum = scan.nextLine();

        // 계좌 검색
        if(searchAccount(accNum) != null) { // null이 아니라면 => 계좌를 찾았다
            BankAccount account = searchAccount(accNum); // 계좌를 꺼내옴

            // 입금
            System.out.println("입금할 금액 입력: ");
            int amount = Integer.parseInt(scan.nextLine());

            if (amount < 0) {
                System.out.println("유효한 금액을 입력해주세요.");
            } else {
                // 입금처리
                account.setBalance(account.getBalance() + amount);
                System.out.println("입금이 정상처리되었습니다. 현재 잔액: " + account.getBalance() + "원");

                // 거래 추가 메서드 처리
                account.addTransaction(TransactionType.입금, amount);
            }
        } else {
            System.out.println("계좌가 없습니다.");
        }
    }

    // 3. 출금
    private static void withdraw() {
        System.out.print("계좌번호 입력: ");
        String accNum = scan.nextLine();

        // 계좌 검색
        if(searchAccount(accNum) != null) { // null이 아니라면 => 계좌를 찾았다
            BankAccount account = searchAccount(accNum); // 계좌를 꺼내옴

            // 출금
            System.out.println("출금할 금액 입력: ");
            int amount = Integer.parseInt(scan.nextLine());

            if (amount < 0) {
                System.out.println("유효한 금액을 입력해주세요.");
            } else if (amount > account.getBalance()) {
                System.out.println("잔액이 부족합니다.");
            } else {
                // 출금처리
                account.setBalance(account.getBalance() - amount);
                System.out.println("입금이 정상처리되었습니다. 현재 잔액: " + account.getBalance() + "원");

                // 거래 추가 메서드 처리
                account.addTransaction(TransactionType.출금, amount);
            }
        } else {
            System.out.println("계좌가 없습니다.");
        }
    }

    // 계좌 검색 메서드
    private static BankAccount searchAccount(String accNum) {
        BankAccount account = null;
        // 리스트에 계좌번호와 일치하는지 여부를 반복 -> 계좌 변환
        for (int i = 0; i < accountList.size(); i++) {
            // 이미 등록된 계좌번호 가져오기
            String dbAccNum = accountList.get(i).getAccountNumber();
            if (dbAccNum.equals(accNum)) { // 등록된 계좌번호와 입력된 계좌번호가 일치하면
                account = accountList.get(i); // 해당 계좌를 반환
                break;
            }
        }
        return account;
    }

    // 4. 계좌 검색
    private static void selectAccount() {
        while (true) {
            System.out.println("계좌번호 입력: ");
            String accNum = scan.nextLine();

            if (searchAccount(accNum) != null) {
                BankAccount account = searchAccount(accNum);

                // 계좌 정보, 거래내역 메서드 호출
                account.displayInfo();
                account.getTransactionHistory();

                break;
            } else {
                System.out.println("계좌가 없습니다. 다시 입력해주세요.");
            }
        }
    }
}
