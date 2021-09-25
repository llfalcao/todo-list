import sign from '../../plus.svg';

const Header = function () {
  return `
    <header id="header">
      <h1></h1>
      <button type="button" id="btn-new-todo" class="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg>
        <span>New Item</span>
      </button>
    </header>
  `;
};

export default Header;
