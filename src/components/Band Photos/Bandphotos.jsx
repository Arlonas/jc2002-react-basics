import bandphotos from './member.jpeg'

const Bandphotos = () => {
    return (
        <div class="band-photos">
      <div class="band-member-card">
        <p>Name</p>
        <img src={bandphotos} alt="" />
      </div>
      <div class="band-member-card">
        <p>Name</p>
        <img src="member.jpeg" alt="" />
      </div>
      <div class="band-member-card">
        <p>Name</p>
        <img src="member.jpeg" alt="" />
      </div>
    </div>
    )
}