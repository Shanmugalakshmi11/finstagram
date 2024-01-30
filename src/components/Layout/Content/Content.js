import styles from "./Content.module.css";
import ImageGrid from "./ImageGrid";

function Content() {
  return (
    <div className="content">
      <h2>Main Content Area</h2>
      <p>
        This is where your main content goes.
        <div class="grid-container">
          <div class="grid-item">
            Techstarter<button class="button">Folgen</button>
            <button class="button">Nachricten Senden</button>
            <button class="button">...</button>
          </div>
          <div class="item2">
            <ImageGrid />
          </div>
          <div class="grid-item">
            <a href="https://www.instagram.com/">53 Beitgräge</a> &nbsp;
            <a href="https://www.instagram.com/">2.693 Followers</a> &nbsp;
            <a href="https://www.instagram.com/">25 Gefolgt</a>
          </div>
          <div class="grid-item"></div>
          <div class="grid-item">Item 5</div>
          <div class="grid-item">Item 6</div>
        </div>
      </p>
    </div>
  );
}

export default Content;
