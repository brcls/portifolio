import StyledComponentsRegistry from "../../lib/registry";
import "../../styles/global.css";

export const metadata = {
  title: "Erick Barcelos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
