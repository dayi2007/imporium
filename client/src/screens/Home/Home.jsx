import './Home.css'
// import { Layout, Carousel } from '../../components'
import Layout from '../../components/Layout/Layout'
import Carousel from '../../components/Carousel/Carousel'
import LandingPage from '../../components/LandingPage-1/LandingPage-1'
import RevolveCarousel from '../../components/RevolveCarousel/RevolveCarousel'
const Home = (props) => {

    const bossbeauties = [
        "https://lh3.googleusercontent.com/JjE6yYAQRvwJKsdkjBJMHUVPaTgRvZijfJyklqMENp8_Qx80Jwot0QlpuTm9O8ETB66doP0bDTy02mvrffLhGwoqGk-fK23X5zhtCQ=w600",
        "https://lh3.googleusercontent.com/KNsr1dccAFXQkszL--NadPHIC9tMf3V0JIuJvnG95slaCqU1nr_8vrL9ZOOfnuNgLWpFC35igss1m6QejXZpxOYqA9hCwwPM_uYWYA=w600",
        "https://lh3.googleusercontent.com/4J-D7p_mqM_THYQc_cOX0iW-Aeon9SeKB2ynenlvEZpyG_rtICs-K14ZegEBBQGOygAeP6uJ6vM_FKggFss7etZGoVpaRkjbGGmPdQ=w281",
        "https://lh3.googleusercontent.com/5nrD5UVwidEREXyH5v70ac21Qn2U5U39X-xrhkbH0hF0tsA_N_W_VltYg-Pe0K99MmDWK81gw3S9qTyuFwO6YpUXtakqBof_t8qZ=w600",
        "https://lh3.googleusercontent.com/YgDfNVKaw1u9lq-6g3OXOnNtbx6eEhxncU-AZ2SSkt1UDb_CJp26vnH5ozI4T0QsQWFdWvmeKlexR6MCJRCsxl_msqXl9UvlYoxZxgE=w600",
        "https://lh3.googleusercontent.com/FW511rNPvopl4QF7xtHo9FclpTL8bkDv5ncq0uG-OXAezXkgbI9oAeOlEP9Qj-LpI43NSMqFO3Nl1TQ-ehr3uSuRwJvrOpt3jjZm=w600",
        "https://lh3.googleusercontent.com/Wpus6xU7DuA8gNL68z_Ic0koKGwWoJywl7PHysrUEzAQc3hoPUFN-7GqyFwDeuMzP6DZjxOiwgq5AMwHwMMjrZ00qhEO-hhn-0aIXg=w600",
        "https://lh3.googleusercontent.com/rlDMHmswxiUdkcbjW3-rgyCujN3OORdzx1T7RmBDeVo5ZL7CbKupc_PXLiTi2Pju0RPYJbjtAumqM3LIjF0qVhVlpE38_OxM3SMB8g=w600"]
    const bossbeautiesids = ["619bb70216d8c371fbe554ce",
        "619bb75716d8c371fbe554d5","619bb7fb16d8c371fbe554df","619bb88d16d8c371fbe554eb","619bb9e316d8c371fbe554fe","619bba4216d8c371fbe55507","619bba9516d8c371fbe55514","619bbacf16d8c371fbe5551e"]

    const mandelbrot = [
        "https://lh3.googleusercontent.com/iQ7ZdRDmfKmHCEqDahOCOtI9OClbCNI4lLNiyJVqZKjqYCICwlW6uMOTQI63TtujJDN-VE3rp0xi_A9uSYo_2I7wHvUbPubjPjtY-lM=w600",
        "https://lh3.googleusercontent.com/NnBgPHVMfRpguPqP1h-j5IpvQxDZOatI2tit4Azv6YPWr079UN3aJnNNxABRR3MPuJn5ATNcULzvsxPGsX_KHdl7lxla0TE18bZC=w600",
        "https://lh3.googleusercontent.com/cE8qS1rP6ypiS3Ti__o8dg6NjcX2icrKEfqEZcgHyPefADtTUlOzCj3zN1MPmXROTZVNInVXWK8ZYPzv58SHVNEWC9FeTxEWWueAWw=w600",
        "https://lh3.googleusercontent.com/KKkdMlGnt31wMnDOQn0O84EWYf1BU8TmPjCkcpuBwXXZLR0plbNFIUUg91jhoPDP6trQHq9AP12XhI0LFzCXlfft-Eu9-NQafZVnw5Q=w600",
        "https://lh3.googleusercontent.com/y4nEscY97dUgpTldwyJnBPUXPpp2qDddgcX9XJq5mJ3qXjg4SPtAWZ0YyfMPT0UVGZ72oItAE9xcyf-DMEK6xZ_XohFoB993iCcwdiQ=w600",
        "https://lh3.googleusercontent.com/k09I2iXOtcw4KhduBRB9RHI_EYG3hpOgk2XxSNxkhsSQjzuG4CZqCO009Vhn4umenwvEsqus3RchnYKP50NWRvdHArRLXudkVwG0YQ=w600",
        "https://lh3.googleusercontent.com/N84c_QEwFo6FJ5iMETlbUtZGKkHBu87jnFNKl2HH0m0ISfxSukxE_ACb4K60MUJeUMey2S8tlCDJY2mL1HaBO98ckzg6hI37Oce1=w600",
        "https://lh3.googleusercontent.com/gRceRuKK3mdr6EBH4swS0asTlxDJVuI0glnb4tjVz6LKbKdYJW2wK0Bzq6uDCIHy_e1_sfhgvX3-0ckEHAYSze17chsUslNP3Sw-BQU=w600"]
    const mandelbrotid = ["619bc6b316d8c371fbe55589",
    "619bc71c16d8c371fbe55590",
    "619bc75d16d8c371fbe55594",
    "619bc79016d8c371fbe5559b",
    "619bc7c916d8c371fbe5559f",
    "619bc84616d8c371fbe555af",
    "619bc8ab16d8c371fbe555bb",
    "619bc8e916d8c371fbe555c6"]
    const coolcats = [
        "https://lh3.googleusercontent.com/OliwDfNAcKT85_TDeXuHgdE5oHByc-OwWCIAIdn8NfeLG2Qr2JuT0i4RudI71LhhT2IFo0V1XoErwZz1S03HGHIu1zzkSblMYC4fGw=w600",
        "https://lh3.googleusercontent.com/iTNGnNsfzooD4IgXeMcUpZx7RgvWXl7Q5DpKqxcf0EFtAaQ2FKpss48feJq6hZhK9fWqU3AEsei9G2CTM5psJcKBKRx9HDTh1fqt=w600",
        "https://lh3.googleusercontent.com/IYmd3jIA97eIQXQIt5bU4IOvCG13NAQTdv-3wfLysGh7DBIzwav3Qpvd8OAc3qaPJOhxtnCzxwdyZipReC_3i0VXXNPo_O5-8qqB=w600",
        "https://lh3.googleusercontent.com/zqch84ZaTTdoNLyH1ZouEwtJCUp8nFkhtmR35gWQN8yh3PloiqL2zzFp-Lwdh-KTsqcF-UC51LnVRFwH22IOJ7QM_vgQJ4Cu7P0-nQ=w600",
        "https://lh3.googleusercontent.com/7DPXUYaFlCjTGt0PwgrbGeQmc1xiRFsjbjQ335HC8PkH72Y4fXYRZPU9LPoaWvE_7ZbaU-2VA2mVKwqQfy21jrxrtVS4upvkj9lXKQ=w600",
        "https://lh3.googleusercontent.com/hQZyzsXcHYFiVOGujKrZkJ7CUtRcMRpAUSqSPiQ-CRX3bex7mtr7H73HI-oC8J3wtwBrBQuBgeIY3qL5BKQxz4mZV3z9C0KTy_zzgQ=w600",
        "https://lh3.googleusercontent.com/iTU0udQtxQ5k_s1zTy4CoIlFPWy0SKiu3Z9CJhoxbiluYPq7Mh_Kjxa7Q-0YY6cwiJ4YpJVCU0VHBSG37BvkDDQ28HYRXHcN0t4tdQ=w600",
        "https://lh3.googleusercontent.com/Ihzel7Y42HYbR3n-JmItv93oJJtM9UWtWGOHMi3Fo0Zys5OzWNnE5s3-l6oT1SSZC7leANH_22FKXNOiVg2Pp8BFjMnSD7muEHNNJA=w600"]
    const coolcatsid = ["619bc69216d8c371fbe55586","619bc6f716d8c371fbe5558d","619bc77016d8c371fbe55598","619bc7cf16d8c371fbe555a2","619bc80f16d8c371fbe555aa","619bc87516d8c371fbe555b5","619bc8d016d8c371fbe555c3","619bc90916d8c371fbe555cb"]

    const featured = ["https://lh3.googleusercontent.com/PZIlUphZOgmjDUHuXGQwnKBI0qswbFDB2Qtu6fiaZ_RA7Zy1wLtklyLFC9th3N-Ia9VbfWtycnp-MJ1a1lBH_420nm1b4N-DjrN__Q=w600",
    "https://lh3.googleusercontent.com/RDfZH1Vk-Sg_MLAHUDNKmOO7Ndq-cut9YN8RzYTz0WUXgUBg-1T8xrjminF2uKXpYvPZhHhGhElXpxRdVV5dtCbKRdYqd2RMVn-D=w600",
    "https://lh3.googleusercontent.com/O_Hsp-3kvKlDZOtPdWo5Qh6jxCSg9iMORjniQW9XUUaNOsblvzuQVFeBXMWFj2kGvwQnQOoXu83aCHMaqJVE437FS3QhOaJYef8xxQ=s992",
    "https://lh3.googleusercontent.com/FHzsbM-Bg1Fkzs7W5TdovhEzq-y3S5eE5lREjhGZqa6Lu7j3qBZk6xWTXIOYyXSj8PeBRkRmFnXwJMwAvU7t-X0224BLP8cU1UuM7C4=s992",
    "https://lh3.googleusercontent.com/vkJVHkQSDFu5-DdIqlzRBfVLfx84WKg5Y1Jx_kNoqHuYWYv3LJ9RZRRe56Oh3PQPBdkcenN1J-lVYySyqgrA6Y8bdcKbbHBoJ_OWiD0=w600",
    "https://lh3.googleusercontent.com/fOHAJuQk5iMyUEzWtdX-CS2dYeZRSfUP1v2B321J4RWRuOfZ9wIm416xMPEsiI0z3o07Kwckekh1IkJaiT0O-wkAOCOsjYdGL7dVwg=w600",
    "https://lh3.googleusercontent.com/W9Fba2FmdNnsCBTR5xC_cVg_lMX3bVEdw-9dnK3Gd9vA6QHBKdSKzHdaf4levHhNkuz_On-Pd4vrd5BYgvxCGUnO_x9hZuO50kOJYg=w600",
    "https://lh3.googleusercontent.com/mV5sntSbh9y--NZI-mOEF-6DmPyCXhISukJ8HsG44SRRqtx4rzk2x7H0xEXEekK2mbl1dJ90hl267TFeWIbVJAmlEO58UCC4kn4G=w600"
        ]
    const featuredid = ["619bc7e416d8c371fbe555a5",
    "619bc8c616d8c371fbe555bf",
    "619bc95f16d8c371fbe555d2",
    "619bca8916d8c371fbe555eb",
    "619bcb2b16d8c371fbe555f8",
    "619bcbd416d8c371fbe55603",
    "619bcc4a16d8c371fbe5560e",
    "619bccd716d8c371fbe55619"]

    const photography = ["https://lh3.googleusercontent.com/6YqCvlwx04PrNoktfyiLf931KnD4hedLoysZXYWnZDwFWFYWrkVMY5yrncjdP8kKTGTuX7ksc5IC4hT7YUEK6Rc9pKF9fnPFU7qj2Q=w600",
    "https://lh3.googleusercontent.com/0mil06yP5gn4dkhM6EQDQ1gAdgpEiAi-AJC6_xygab9PUoppWVPWsWzv5bVwG4ctxrEU-kthzGxU9mdhxJdFS___MfrSmAw3v_qJ=w600",
    "https://lh3.googleusercontent.com/DQS371b_qKkQzMxFTfz2ptxjc0v6VJ5AXD3FeeaZ6eM8auR7A30J6MOzgEGgVzNwcQggMNdUBnrfNLO6HwiHrpKy=w600",
    "https://lh3.googleusercontent.com/h_0Ri0xZ8qR3u5aGrqeXYaT3tK4TqiILezHOoNgH4rG0fAflA2aUh9GIM19ZesqowwG6ZntC_YE8qlMPcsXN8mf_zVF3n6c2kOpi=w600",
    "https://lh3.googleusercontent.com/2fo5AEKrZ1Wd5DioNwh4XPb3MrSLjjuygaO1_fuKGtEn9SkmiOX7HM03XBeQc0T1CfKzNFcfvzqu9XUc_-sGjvGlmf49gbJfhzy5rtM=w600",
    "https://lh3.googleusercontent.com/doMKh9ELLYLKqkeBzGXSvCJqjF7IGN2jxsP7RjzkuFqKizb5FGI5xDnt59R_diR7G9rlBzs-kp_DTEYNCZrE2QNqYiSMewrFMwle6w=w600",
    "https://lh3.googleusercontent.com/IzIzWvpD1TpZI0r1WIqQv3-6N7Uh64_KyIyn5ynafycjn6Wnj0x_bZlAj35Iu76dGXbdNJjLhtVhA_NCa2C2EoQMNkWaHGdXgPIQZw=w600",
    "https://lh3.googleusercontent.com/QPRROnWkKg94w6ssPPYgz7_Jw_ZW0B5T_7UMhyhiOx-h0eZ9sUeEZsgtNLTrcHj-CEFl256K7FMKK9MqcOXSVy7yQ3TRklHSki87qZQ=w600"
        ]

    const photographyid = ["619bb96716d8c371fbe554f2",
    "619bb3f916d8c371fbe554b4",
    "619bb75e16d8c371fbe554d8",
    "619bb9d116d8c371fbe554fa",
    "619bba2816d8c371fbe55503",
    "619bba5216d8c371fbe5550d",
    "619bbaca16d8c371fbe5551b",
    "619bbadd16d8c371fbe55525"]

    const anime = ["https://lh3.googleusercontent.com/hLvf-RvXimQ4W-jPmM3lMICZpK6G2sHjJ5DsgvCU7mskV92JdMzKjn5Iy2mhrRceErFNcq9E0A_nwzFs1zQRitdEU7BJaQPTe6MdOU4=w600",
    "https://lh3.googleusercontent.com/8IoMOZnqtkudDNX-t1IbCLdBjFhJ53R3RVyLFhxcy-6tfhOt_DGn8cS78SEcRRwjKTXRwaAomRNRk9nOPnkSDJ6j3oXdlKnFvJTcug=w600",
    "https://lh3.googleusercontent.com/HT7zaFbpzjPVsA4uGTWxD3QqOxvkKGkLXmbgyxBVIUPQiiSJ8SDpeEq-kR7bgQW-mA6Ah5e6vVRG9sjD-_5ymNyI1Fvz59iCEVk0=w600",
    "https://lh3.googleusercontent.com/XsDV6ZOf4-gFQilqhS0zZVkT3ZqbnN5nMTWkhf_ivCvx7wE8RQrPrKQi8K3EtztcWPKiUNJObDZ5XD9IWlxm05ROqQZ4jfYwv0ojjgE=w600",
    "https://lh3.googleusercontent.com/5doTLqUgcfIKlfRA6H0I3Ify4UeoiJA5EoYBK2RjHVbRkZEBZ1VdcOdukXG1zRDq7uKEK_O6zHpaMFKSmLJBkO6nOA5e4Kk-lK4S=w600",
    "https://lh3.googleusercontent.com/-p2Srd7830O9gNHWxXQZUH9UrR18aEcZCsZ8IqgDrvp3Z6jE7GnXY0z56UuDJAze37jZaeOPStRIhpC3oavrM_C1l4RGUBm1LYAltA=w600",
    "https://lh3.googleusercontent.com/UMmNoILPyMtXxOCnAy_d80mVozDoZ27Hcoz9GL1XUvWr9jHjQqPJcQWzsX3IduHo0xOIpwvyLvdZhYZmSx49NWyq1PW7UZq81kH8PA=w600",
    "https://lh3.googleusercontent.com/eTnOOvzucyu-adR_lxHl1Ss82s2rS6TFnbCkVsTzcqym33gOQ1u0aoXFFa4taSxnE8vqSrysY5jn492TukfRYFu7SNfWPeaQ2Tjjmw=w600"
        ]

    const animeid = ["619bb3f316d8c371fbe554b0",
    "619bb74316d8c371fbe554d2",
    "619bb81f16d8c371fbe554e3",
    "619bb9cc16d8c371fbe554f7",
    "619bb85f16d8c371fbe554e8",
    "619bb90816d8c371fbe554ef",
    "619bb7d416d8c371fbe554dc",
    "61919de0716b325659e5d2cf"]

return (
    <div className="home-div">
        <Layout user={props.user}>

        <div className="main-carousel">
                <Carousel />
        </div>
            <div>
            <LandingPage />
            </div>

            <div className="feature-title">
                <h1 className="featured-artists">Featured Artists</h1>
            </div>
            <div className="revolving-carousels">
                <RevolveCarousel images={bossbeauties} _id={bossbeautiesids} collectionName={"Boss Beauties"}/>
                <RevolveCarousel images={coolcats} _id={coolcatsid} collectionName={"Cool Cats"}/>
                <RevolveCarousel images={mandelbrot} _id={mandelbrotid} collectionName={"Mandelbrot"}/>
            </div>
            <div className="feature-title">
                <h1 className="featured-categories">Featured Categories</h1>
            </div>
            <div className="revolving-carousels">
                <RevolveCarousel images={featured} _id={featuredid} collectionName={"Featured"}/>
                <RevolveCarousel images={photography} _id={photographyid} collectionName={"Photography"}/>
                <RevolveCarousel images={anime} _id={animeid} collectionName={"Anime"}/>
            </div>
        </Layout>
    </div>

)
}

export default Home