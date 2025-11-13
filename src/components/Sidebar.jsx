const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "180px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Create Post");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Create Post" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACUCAMAAADhypYgAAAAY1BMVEX///8AAAC+vr4VFRXw8PDo6OhfX19AQED7+/tvb2+4uLjHx8c7Ozuampr29vbLy8vW1taHh4epqal6enrh4eEMDAwfHx+ioqJaWlpISEhQUFApKSmSkpJkZGRpaWmwsLAwMDC6KKsYAAAEWUlEQVR4nO2d2ZLqIBCGIYtmMZuJZtX4/k95dOrMxaRJZjRNd0jx30vxFRCa7h8UwsrKympB/rvyUu4uK5W3xzfVtl3XHcphzDdF5Fzkh7q47vVQV9wA33LcT0G+VWZpwE0hMECkdJMNzDIMkOc0K2JuFByQJ8qQ7wNEyvbMulTwQJ7zy98HiJQN4/RCBZE9HwkuiLywkSCDyJ5rq8cGkR3ThoIOIou9gMhoIyBDMqdhKIoybNp+GaRj2U4giBcsKH3J87zKSZpZEpbJpQD582+r8qoEOWYaOzynNSBCpMNpK0OyDuQ5KqEC5MQwJGtBhCgVJLWWvi5qPUhQQJCGfn9fDyK8OyShn1sIICKDG0tCHqhggIgEzq0PWlknFJC8BSTkiwQFRAz8iwQHZARb/Bm9p78IByTvpq0U1CkVHJAA7O+hmSBwe+8MBQGrvTUUpJ6udlNBzlOQZi8gpi72etqMoZ9fAUL5Ebujv0nX55c8dYoDkoIjCXlKCClEmYa/NzPDeFFPG6GvXqGAeGCJmHnUFdG0kZJ8ZqGA+LdpGwx5bASQAESMN4Y0NgJIPbWzuOTHQ4EBUoAWbhxFq7UgKVgfsnc09XVRK0FA1PtUqauvi/ocJEgrcJx6qdPa31m9DxKknudXeVaDzMmXTpup6o7RgsbxXA9F2CjrOy+1XI4B5Kpuw1F10wBy34kXhSHE0gLC6jzDAzkyDgcmCEd8pQPEDSNezyziGumHjBEF9avVF2zbCPaGeCy4BgXdr9UyDQq+8eya7ASEIROvC0SGDHsjBDkt6vHo1W6zH9pEXsuJl+Q40VgnyetM8lggIS+PKED+9v0M/CqO6nLWp0nu2FqXfPDyCGZRvnSh/gqvzmt50PXwpaue/s4KI2U6KkmIHZoo2fhKNSgurdMJp9BTKdyAMkTv7JKQiqGVwpd9Is1EIIGIXLFNkq4SLBARQZADZZkEDURAX2NPWbjCA8nhkFAG9HggAVzvIeHcwgMRMQChzGgjgvgA5EJYu0IEUXjkCT1CiCABdJYTBvOIIMIBIANdcggTJAMgBd2RVy8I4dldLwjhRmJHRKHdgMCt3dDFDs/uhFetEEFSeI+PsB6HGWvBE4mZIQoMGq9mBo0w1OqMDONT+MAVZVIeD+QMOMw86qaQw8zkg+I2eGNiOkiVyCY1NyKBOIry1YPUbYoDEqusgbQuTRyTvwJDXmhvJyE8lVCpXn2Q8qilv7Na7cTOwYW3/4o19XhGq0C8LCrmqu7UPuYPQIIgfTmYnXoIjzMUkv7aGwQJf9f9dujaJb/AJursKLpv4NYbhhge1dMCciH+YukCcckv6uoBYblipcMKuJU36Faq24k5c9jHg5NtxnZhAROE9iSlC6RvOTGwQE5NwfySNALIoymTmP/BdeUp9Y9yj4cyqZ2Kn0K87qIf3tT9XpbFUJ8dJ84r3utIP/T2n0T4vud5m3i838rKysrKysrKysrKykqpf3k1RbR3GXwqAAAAAElFTkSuQmCC"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Bhoomi</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;