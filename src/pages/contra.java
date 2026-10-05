import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class GenerarPassword {

    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String password = "CruzBlanquit@1959";

        String hash = encoder.encode(password);

        System.out.println("Contraseña: " + password);
        System.out.println("BCrypt: " + hash);
    }
}