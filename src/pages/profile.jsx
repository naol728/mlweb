import { LampContainer } from "../ui/lamp";
import { motion } from "framer-motion";
function Profile() {
  return (
    <div className="flex justify-center items-center h-full ">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
        >
          <div className="text-center">
            <div className="mb-5 flex justify-center items-center">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQHMnvvBrGv2_Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732365765826?e=1743638400&v=beta&t=jCThKCxuxLY70wxW50NNdOWvYqmbCEaBOMAOStBOZn8"
                className="rounded-full h-40 w-40"
              />
            </div>
            <div className="text-center text-2xl font-bold">
              <span className="text-slate-100"></span>
              <span className="text-slate-300"> Naol Mesert</span>
            </div>
            <div className="text-center text-2xl font-bold">
              <span className="text-slate-100"> </span>
              <span className="text-slate-300">naolmeseret22@gmail.com</span>
            </div>
          </div>
        </motion.h1>
      </LampContainer>
    </div>
  );
}
export default Profile;
