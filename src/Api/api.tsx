export const fakeFetch = (url: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/videos") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            videos: [
              {
                id: 1,
                title: "Introduction to React",
                description:
                  "Learn the basics of React in this introductory tutorial",
                url: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
                thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
                duration: "12:35"
              },
              {
                id: 2,
                title: "JavaScript for Beginners",
                description:
                  "Get started with JavaScript with this beginner-friendly tutorial",
                url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
                thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
                duration: "20:17"
              },
              {
                id: 3,
                title: "Python Crash Course",
                description:
                  "Learn Python basics in this crash course for beginners",
                url: "https://www.youtube.com/watch?v=Z1Yd7upQsXY",
                thumbnail: "https://i.ytimg.com/vi/Z1Yd7upQsXY/hqdefault.jpg",
                duration: "15:42"
              },
              {
                id: 4,
                title: "JavaScript for Beginners",
                description:
                  "Get started with JavaScript programming with this easy-to-follow tutorial",
                url: "https://www.youtube.com/watch?v=5bMdjkfvONE",
                thumbnail: "https://i.ytimg.com/vi/5bMdjkfvONE/hqdefault.jpg",
                duration: "20:18"
              },
              {
                id: 5,
                title: "Git and GitHub Tutorial for Beginners",
                description:
                  "Learn how to use Git and GitHub for version control and collaboration on software projects",
                url: "https://www.youtube.com/watch?v=SWYqp7iY_Tc",
                thumbnail: "https://i.ytimg.com/vi/SWYqp7iY_Tc/hqdefault.jpg",
                duration: "23:14"
              },
              {
                id: 6,
                title: "HTML and CSS Crash Course",
                description:
                  "Get up and running with HTML and CSS in this crash course designed for beginners",
                url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
                thumbnail: "https://i.ytimg.com/vi/UB1O30fR-EE/hqdefault.jpg",
                duration: "12:51"
              },
              {
                id: 7,
                title: "Introduction to Data Science",
                description:
                  "Learn the basics of data science and how it's used to make data-driven decisions",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
                duration: "25:47"
              },
              {
                id: 8,
                title: "Node.js Crash Course",
                description:
                  "Learn the basics of Node.js and build a web server in this crash course for beginners",
                url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
                thumbnail: "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg",
                duration: "13:45"
              },
              {
                id: 9,
                title: "React Native Crash Course",
                description:
                  "Build a mobile app using React Native in this comprehensive tutorial for beginners",
                url: "https://www.youtube.com/watch?v=mkualZPRZCs",
                thumbnail: "https://i.ytimg.com/vi/mkualZPRZCs/hqdefault.jpg",
                duration: "18:39"
              },
              {
                id: 10,
                title: "Networking Basics",
                description:
                  "Learn the fundamentals of computer networking, including protocols, hardware, and terminology",
                url: "https://www.youtube.com/watch?v=3QhU9jd03a0",
                thumbnail: "https://i.ytimg.com/vi/3QhU9jd03a0/hqdefault.jpg",
                duration: "30:58"
              },
              {
                id: 11,
                title: "REST API Tutorial",
                description:
                  "Learn how to design and build a RESTful API using Node.js and Express",
                url: "https://www.youtube.com/watch?v=Q-BpqyOT3a8",
                thumbnail: "https://i.ytimg.com/vi/Q-BpqyOT3a8/hqdefault.jpg",
                duration: "37:49"
              },
              {
                id: 12,
                title: "Bootstrap 5 Crash Course",
                description:
                  "Learn how to use Bootstrap 5 to build responsive web pages and layouts",
                url: "https://www.youtube.com/watch?v=4sosXZsdy-s",
                thumbnail: "https://i.ytimg.com/vi/4sosXZsdy-s/hqdefault.jpg",
                duration: "21:14"
              },
              {
                id: 13,
                title: "GraphQL Tutorial for Beginners",
                description:
                  "Learn how to use GraphQL to build efficient and flexible APIs for your web applications",
                url: "https://www.youtube.com/watch?v=ed8SzALpx1Q",
                thumbnail: "https://i.ytimg.com/vi/ed8SzALpx1Q/hqdefault.jpg",
                duration: "28:25"
              },
              {
                id: 14,
                title: "Sass Tutorial for Beginners",
                description:
                  "Discover the power of Sass and how it can be used to write more efficient and modular CSS",
                url: "https://www.youtube.com/watch?v=_a5j7KoflTs",
                thumbnail: "https://i.ytimg.com/vi/_a5j7KoflTs/hqdefault.jpg",
                duration: "19:36"
              }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Video list not found."
        });
      }
    }, 2000);
  });
};
