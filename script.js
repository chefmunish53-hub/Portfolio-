const DISHES_DATA = [
            {
                id: 'dish-wagyu',
                name: 'Tandoori MoMo with Chilly Coriander Sauce',
                course: 'Amuse & Starters',
                desc: 'Juicy momos marinated in flavorful tandoori spices, grilled to perfection for a smoky, charred finish, and served with a fresh, spicy chilli-coriander sauce. A delicious starter packed with bold Indian flavors.',
                image: './tandoori-momo.jpeg'
            },
            {
                id: 'dish-crudo',
                name: 'Guacamole mango cup ',
                course: 'Amuse & Starters',
                desc: 'A refreshing blend of creamy avocado and juicy ripe mango, tossed with fresh herbs, zesty lime, and a hint of spice. Served in a delightful cup, this vibrant starter offers the perfect balance of sweet, tangy, and creamy flavours.',
                image: './guacamole-mango-cup.jpeg'
            },
            {
                id: 'dish-turbot',
                name: 'Italian Samosa with Muhammara Sauce',
                course: 'Amuse & Starters',
                desc: 'Crispy golden samosas filled with a delicious Italian-inspired mixture of herbs, cheese, and savoury flavours, served with rich and smoky Muhammara sauce made from roasted red peppers and walnuts. A delightful fusion starter combining Italian flavours with a Middle Eastern twist.',
                image: './italian-samosa.jpeg'
            },
            {
                id: 'dish-lamb',
                name: 'Purple Cabbage Dimsum with Brown Garlic Sauce',
                course: 'Amuse & Starters',
                desc: 'Delicate dumplings filled with crunchy purple cabbage and aromatic seasonings, steamed to perfection for a light and flavourful bite. Served with a rich brown garlic sauce that adds a savoury, garlicky touch, making this starter a perfect blend of freshness and bold Asian flavours.',
                image: './dimsim.jpeg'
            },
            {
                id: 'dish-gnocchi',
                name: 'Malai Gnocchi with Truffle Cream Sauce',
                course: 'Amuse & Starters',
                desc: 'Soft, pillowy gnocchi coated in a rich and creamy malai sauce, infused with aromatic spices and a touch of indulgence. Finished with luxurious truffle cream sauce, this fusion delicacy brings together comforting Indian flavours and elegant Italian sophistication for a truly indulgent dining experience.',
                image: './gnocchi.jpeg'
            },
            {
                id: 'dish-gnocchi',
                name: 'Crispy Corn Fritters',
                course: 'Amuse & Starters',
                desc: 'Golden, crispy fritters made with sweet corn kernels, fresh herbs, and aromatic spices, fried to perfection for a crunchy exterior and a soft, flavourful centre. Served with a delicious dipping sauce, these irresistible bites offer the perfect combination of sweetness, spice, and crunch.',
                image: './crispy-corn.jpeg'
            },
            {
                id: 'dish-cesar',
                name: 'Cesar Salad',
                course: 'Salads',
                desc: 'A refreshing mix of crisp romaine lettuce tossed in a creamy Caesar dressing, topped with crunchy golden croutons and a generous sprinkle of Parmesan cheese. Light, flavourful, and perfectly balanced, this classic salad is a delightful start to any meal.',
                image: './cesar.jpeg'
            },
            {
                id: 'dish-sphere',
                name: 'Deconstructed brownie',
                course: 'Pastry & Avant-Garde',
                desc: 'A creative twist on the classic chocolate brownie, featuring rich, fudgy brownie pieces paired with smooth chocolate sauce, creamy elements, and delightful textures. Beautifully presented for a decadent dessert experience that combines indulgent chocolate flavours with an elegant touch.',
                image: './brownie.jpeg'
            },
            {
                id: 'dish-sphere',
                name: 'Pistachio Cannoli with Caramel Sauce',
                course: 'Pastry & Avant-Garde',
                desc: 'A crispy golden Italian pastry shell filled with smooth, creamy pistachio filling, offering a delightful blend of nutty richness and sweetness. Drizzled with luscious caramel sauce and finished with a touch of pistachio crunch, this elegant dessert is the perfect balance of creamy, crispy, and indulgent flavours.',
                image: './canoli.jpeg'
            },
            {
                id: 'dish-sphere',
                name: 'Mango Panna Cotta',
                course: 'Pastry & Avant-Garde',
                desc: 'A silky-smooth Italian dessert infused with the tropical sweetness of ripe mangoes. Delicately creamy with a refreshing fruity flavour, topped with luscious mango purée for a perfect balance of sweetness and elegance. A delightful dessert to end your meal on a refreshing note.',
                image: './pannacotta.jpeg'
            },
            {
                id: 'dish-sphere',
                name: 'Motichoor Ladoo',
                course: 'Pastry & Avant-Garde',
                desc: 'A traditional Indian sweet made with tiny, golden gram flour pearls, delicately fried and soaked in aromatic sugar syrup. Blended with hints of cardamom and garnished with nuts, this melt-in-the-mouth delicacy brings authentic Indian sweetness to every celebration.',
                image: './laddu.jpeg'
            }
        ];

        // BOOKINGS STATE
        let userBookings = [
            {
                id: 'LV-2026-9042',
                serviceTitle: 'Gourmet In-Home Dining',
                date: '2026-10-18',
                timeSlot: '19:00 - Evening Dinner Service',
                guests: 6,
                clientName: 'Alexander Hayes',
                status: 'Confirmed',
                total: 1720
            },
            {
                id: 'LV-2026-8819',
                serviceTitle: 'Private Culinary Masterclasses',
                date: '2026-10-24',
                timeSlot: '14:30 - Masterclass Afternoon',
                guests: 4,
                clientName: 'Beatrice Fontaine',
                status: 'Confirmed',
                total: 730
            }
        ];

        try {
            const saved = localStorage.getItem('atelier_vance_standalone_bookings');
            if (saved) userBookings = JSON.parse(saved);
        } catch (e) { }

        // RENDER DISHES
        function renderDishes(filter = 'all') {
            const container = document.getElementById('dishesContainer');
            const filtered = filter === 'all' ? DISHES_DATA : DISHES_DATA.filter(d => d.course === filter);

            container.innerHTML = filtered.map(dish => `
        <div class="dish-card">
          <div class="dish-img-box" onclick="openDishDetail('${dish.id}')">
            <img class="dish-img" src="${dish.image}" alt="${dish.name}" onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80'">
          </div>
          <div class="dish-info">
            <div class="dish-course">${dish.course}</div>
            <h3 class="dish-title" onclick="openDishDetail('${dish.id}')">${dish.name}</h3>
            <p class="dish-desc">${dish.desc}</p>
            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #1f1a14; padding-top:12px;">
              <button class="btn-outline-gold" style="padding:6px 12px; font-size:10px;" onclick="openDishDetail('${dish.id}')">Details</button>
              <button class="btn-primary-gold" style="padding:6px 14px; font-size:10px;" onclick="openBookingModal('in_home_dining')">Book Dish</button>
            </div>
          </div>
        </div>
      `).join('');
        }

        function filterDishes(category) {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.toggle('active', btn.innerText.toLowerCase() === category.toLowerCase() || (category === 'all' && btn.innerText === 'ALL CREATIONS'));
            });
            renderDishes(category);
        }

        // DISH DETAIL MODAL
        function openDishDetail(dishId) {
            const dish = DISHES_DATA.find(d => d.id === dishId);
            if (!dish) return;
            document.getElementById('modalDishCourse').innerText = dish.course;
            document.getElementById('modalDishTitle').innerText = dish.name;
            document.getElementById('modalDishDesc').innerText = dish.desc;
            document.getElementById('dishDetailOverlay').classList.add('active');
        }
        function closeDishDetail() {
            document.getElementById('dishDetailOverlay').classList.remove('active');
        }

        // BOOKING MODAL & CALCULATION
        function openBookingModal(serviceId = 'in_home_dining') {
            document.getElementById('modalServiceSelect').value = serviceId;
            updateBookingCostEstimate();
            document.getElementById('bookingModalOverlay').classList.add('active');
        }
        function closeBookingModal() {
            document.getElementById('bookingModalOverlay').classList.remove('active');
        }

        function updateBookingCostEstimate() {
            const service = document.getElementById('modalServiceSelect').value;
            const guests = parseInt(document.getElementById('modalGuestCount').value);
            const courses = parseInt(document.getElementById('modalCourseCount').value);

            let total = 0;
            if (service === 'masterclass') {
                total = 580 + (Math.max(0, guests - 4) * 95);
            } else if (service === 'bespoke_culinary') {
                total = 1200;
            } else {
                const base = service === 'dinner_party' ? 160 : 195;
                const multiplier = courses === 3 ? 0.9 : courses === 5 ? 1.25 : courses === 7 ? 1.55 : 1;
                total = Math.round(base * guests * multiplier);
            }
            document.getElementById('estimatedCostLabel').innerText = `£${total} GBP`;
        }

        function handleBookingSubmit(e) {
            e.preventDefault();
            const serviceSelect = document.getElementById('modalServiceSelect');
            const serviceTitle = serviceSelect.options[serviceSelect.selectedIndex].text.split('(')[0].trim();
            const date = document.getElementById('modalBookingDate').value;
            const time = document.getElementById('modalTimeSlot').value;
            const guests = parseInt(document.getElementById('modalGuestCount').value);
            const clientName = document.getElementById('modalClientName').value;
            const costText = document.getElementById('estimatedCostLabel').innerText.replace(/\D/g, '');

            const newId = 'LV-2026-' + Math.floor(1000 + Math.random() * 9000);
            const newBooking = {
                id: newId,
                serviceTitle: serviceTitle,
                date: date,
                timeSlot: time,
                guests: guests,
                clientName: clientName,
                status: 'Confirmed',
                total: parseInt(costText) || 780
            };

            userBookings.unshift(newBooking);
            try {
                localStorage.setItem('atelier_vance_standalone_bookings', JSON.stringify(userBookings));
            } catch (err) { }

            document.getElementById('navBookingCount').innerText = userBookings.length;
            closeBookingModal();
            showToast(`Appointment ${newId} confirmed! Added to your bookings.`);
            downloadIcs(newBooking);
        }

        // ICS CALENDAR EXPORT
        function downloadIcs(booking) {
            const dateClean = booking.date.replace(/-/g, '');
            const ics = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Chef Laurent Vance//Atelier//EN\r\nBEGIN:VEVENT\r\nUID:${booking.id}@cheflaurentvance.com\r\nDTSTART:${dateClean}T190000Z\r\nDTEND:${dateClean}T230000Z\r\nSUMMARY:Chef Laurent Vance: ${booking.serviceTitle}\r\nDESCRIPTION:Reservation ID: ${booking.id} for ${booking.clientName} (${booking.guests} Guests)\r\nSTATUS:CONFIRMED\r\nEND:VEVENT\r\nEND:VCALENDAR`;

            const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `Chef-Laurent-Vance-${booking.id}.ics`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // BOOKINGS MANAGER
        function openBookingsManager() {
            const list = document.getElementById('bookingsListContainer');
            document.getElementById('navBookingCount').innerText = userBookings.length;

            if (userBookings.length === 0) {
                list.innerHTML = `<p style="color:var(--text-secondary); text-align:center; padding:30px;">No appointments reserved yet.</p>`;
            } else {
                list.innerHTML = userBookings.map(b => `
          <div style="background:#090807; border:1px solid #241e17; padding:16px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
              <span style="font-family:monospace; font-size:12px; color:var(--gold);">${b.id}</span>
              <h4 style="font-size:18px; margin:2px 0;">${b.serviceTitle}</h4>
              <div style="font-size:12px; color:var(--text-muted);">${b.date} · ${b.timeSlot} · ${b.guests} Guests</div>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-family:var(--font-serif); font-size:18px; color:var(--gold); margin-right:8px;">£${b.total}</span>
              <button class="btn-outline-gold" style="padding:6px 12px; font-size:10px;" onclick="downloadIcsById('${b.id}')">Download .ICS</button>
              <button class="btn-outline-gold" style="padding:6px 12px; font-size:10px; border-color:#5c2222; color:#d98888;" onclick="cancelBooking('${b.id}')">Cancel</button>
            </div>
          </div>
        `).join('');
            }

            document.getElementById('bookingsManagerOverlay').classList.add('active');
        }
        function closeBookingsManager() {
            document.getElementById('bookingsManagerOverlay').classList.remove('active');
        }
        function downloadIcsById(id) {
            const b = userBookings.find(x => x.id === id);
            if (b) downloadIcs(b);
        }
        function cancelBooking(id) {
            if (confirm('Cancel this culinary appointment?')) {
                userBookings = userBookings.filter(x => x.id !== id);
                try {
                    localStorage.setItem('atelier_vance_standalone_bookings', JSON.stringify(userBookings));
                } catch (e) { }
                document.getElementById('navBookingCount').innerText = userBookings.length;
                openBookingsManager();
                showToast('Reservation cancelled.');
            }
        }

        // CONTACT FORM LOGIC (WORKING CONTACT ME)
        let lastContactData = null;
        function handleContactSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const phone = document.getElementById('contactPhone').value;
            const service = document.getElementById('contactService').value;
            const location = document.getElementById('contactLocation').value;
            const message = document.getElementById('contactMessage').value;

            lastContactData = { name, email, phone, service, location, message };

            // Save to localStorage contact history
            try {
                const history = JSON.parse(localStorage.getItem('atelier_vance_contacts') || '[]');
                history.unshift({ ...lastContactData, id: 'ENQ-' + Date.now().toString().slice(-4), timestamp: new Date().toISOString() });
                localStorage.setItem('atelier_vance_contacts', JSON.stringify(history));
            } catch (err) { }

            document.getElementById('contactSuccessMsg').style.display = 'block';
            showToast(`Thank you, ${name}. Your message has been dispatched to Chef Vance!`);
        }

        function sendViaMailtoClient() {
            if (!lastContactData) return;
            const subject = encodeURIComponent(`Private Culinary Enquiry - ${lastContactData.name} (${lastContactData.service})`);
            const body = encodeURIComponent(
                `Dear Chef Laurent Vance Atelier,\n\n` +
                `Patron Name: ${lastContactData.name}\n` +
                `Email: ${lastContactData.email}\n` +
                `Phone: ${lastContactData.phone || 'Not provided'}\n` +
                `Service Interest: ${lastContactData.service}\n` +
                `Location: ${lastContactData.location || 'Confidential'}\n\n` +
                `Requirements / Event Vision:\n${lastContactData.message}\n`
            );
            window.location.href = `mailto:concierge@cheflaurentvance.com?subject=${subject}&body=${body}`;
        }

        function copyContactReceipt() {
            if (!lastContactData) return;
            const text = `Atelier Laurent Vance Enquiry\nName: ${lastContactData.name}\nEmail: ${lastContactData.email}\nPhone: ${lastContactData.phone}\nService: ${lastContactData.service}\nLocation: ${lastContactData.location}\nMessage: ${lastContactData.message}`;
            navigator.clipboard.writeText(text);
            showToast('Enquiry receipt copied to clipboard!');
        }

        // TOAST NOTIFICATION
        function showToast(msg) {
            const toast = document.getElementById('toast');
            toast.innerText = '✦ ' + msg;
            toast.style.display = 'block';
            setTimeout(() => {
                toast.style.display = 'none';
            }, 4000);
        }

        // UTILITIES
        function scrollToId(id) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }

        function toggleMobileMenu() {
            const nav = document.querySelector('.desktop-nav');
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '80px';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = '#080706';
                nav.style.padding = '20px';
                nav.style.borderBottom = '1px solid #241f19';
            }
        }

        // INITIALIZE
        renderDishes('all');
        document.getElementById('navBookingCount').innerText = userBookings.length;